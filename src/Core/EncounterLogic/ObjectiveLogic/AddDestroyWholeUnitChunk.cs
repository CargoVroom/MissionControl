using UnityEngine;
using System;
using System.Collections;
using System.Collections.Generic;

using BattleTech;
using BattleTech.Designed;
using BattleTech.Framework;

using SpawnVariation.Logic;
using SpawnVariation.Rules;
using SpawnVariation.EncounterFactories;
using SpawnVariation.Utils;

namespace SpawnVariation.Logic {
  public class AddDestroyWholeUnitChunk : ObjectiveLogic {
    private string teamGuid;
    private string lanceGuid;
    private List<string> unitGuids;

    public AddDestroyWholeUnitChunk(string teamGuid, string lanceGuid, List<string> unitGuids) {
      this.teamGuid = teamGuid;
      this.lanceGuid = lanceGuid;
      this.unitGuids = unitGuids;
    }

    public override void Run(RunPayload payload) {
      Main.Logger.Log($"[AddDestroyWholeUnitChunk] Adding encounter structure");
      EncounterLayerData encounterLayerData = SpawnManager.GetInstance().EncounterLayerData;
      DestroyWholeLanceChunk destroyWholeChunk = ChunkFactory.CreateDestroyWholeLanceChunk();
      destroyWholeChunk.encounterObjectGuid = System.Guid.NewGuid().ToString();

      bool spawnOnActivation = true;
      LanceSpawnerGameLogic lanceSpawner = LanceSpawnerFactory.CreateLanceSpawner(
        destroyWholeChunk.gameObject,
        "Lance_Enemy_OpposingForce_CWolf",
        lanceGuid,
        teamGuid,
        spawnOnActivation,
        SpawnUnitMethodType.InstantlyAtSpawnPoint,
        unitGuids
      );
      LanceSpawnerRef lanceSpawnerRef = new LanceSpawnerRef(lanceSpawner);

      bool showProgress = true;
      int priority = -10;
      bool displayToUser = true;
      DestroyLanceObjective objective = ObjectiveFactory.CreateDestroyLanceObjective(
        destroyWholeChunk.gameObject,
        lanceSpawnerRef,
        "Destroy CWolf Guard Units",
        showProgress,
        "[percentageComplete]",
        "The primary objective to destroy the enemy lance",
        priority,
        displayToUser,
        ObjectiveMark.AttackTarget
      );

      
      DestroyLanceObjectiveRef destroyLanceObjectiveRef = new DestroyLanceObjectiveRef();
      destroyLanceObjectiveRef.encounterObject = objective;

      destroyWholeChunk.lanceSpawner = lanceSpawnerRef;
      destroyWholeChunk.destroyObjective = destroyLanceObjectiveRef;
    }
  }
}