function compareRobots(robot1, memory1, robot2, memory2) {
  function generateTask() {
    let numParcels = 5;
    let parcels = [];
    for (let i = 0; i < numParcels; i++) {
      let place = randomPick(Object.keys(roadGraph));
      let address;
      do {
        address = randomPick(Object.keys(roadGraph));
      } while (address == place);
      parcels.push({ place, address });
    }
    return { parcels };
  }

  function runTask(robot, memory) {
    let state = VillageState.random();
    let steps = 0;
    for (let turn = 0; ; turn++) {
      if (state.parcels.length == 0) {
        return steps;
      }
      let action = robot(state, memory);
      state = state.move(action.direction);
      memory = action.memory;
      steps++;
      if (steps > 100) {
        return Infinity;
      }
    }
  }
  function randomPick(array) {
    let choice = Math.floor(Math.random() * array.length);
    return array[choice];
  }
  let totalSteps1 = 0;
  let totalSteps2 = 0;
  for (let i = 0; i < 100; i++) {
    let task = generateTask();
    totalSteps1 += runTask(robot1, memory1);
    totalSteps2 += runTask(robot2, memory2);
  }
  let averageSteps1 = totalSteps1 / 100;
  let averageSteps2 = totalSteps2 / 100;
  return [averageSteps1, averageSteps2];
}
compareRobots(routeRobot, [], goalOrientedRobot, []);
