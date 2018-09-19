using UnityEngine;
using System;
using System.Collections;
using System.Collections.Generic;

using BattleTech;

namespace SpawnVariation.Logic {
  public class SpawnLanceLogic : SpawnLogic {
    public SpawnLanceLogic() : base() { }

    protected bool AreLanceMemberSpawnsValid(GameObject lance, GameObject orientationTarget) {
      CombatGameState combatState = UnityGameInstance.BattleTechGame.Combat;
      List<GameObject> spawnPoints = lance.FindAllContains("SpawnPoint");

      foreach (GameObject spawnPoint in spawnPoints) {
        Vector3 spawnPointPosition = combatState.HexGrid.GetClosestPointOnGrid(spawnPoint.transform.position);
        spawnPointPosition.y = combatState.MapMetaData.GetLerpedHeightAt(spawnPointPosition);

        Vector3 checkTarget = combatState.HexGrid.GetClosestPointOnGrid(orientationTarget.transform.position);
        checkTarget.y = combatState.MapMetaData.GetLerpedHeightAt(checkTarget);
        
        if (!PathFinderManager.GetInstance().IsSpawnValid(spawnPointPosition, checkTarget)) {
          Main.Logger.LogWarning("[AreLanceMemberSpawnsValid] Lance member spawn path to first objective is blocked. Select a new lance spawn point");
          return false;
        }
      }

      PathFinderManager.GetInstance().Reset();
      return true;
    }
  }
}