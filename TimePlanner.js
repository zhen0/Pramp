function meetingPlanner(slotsA, slotsB, dur) {
  let slotADuration = slotsA[0][1] - slotsA[0][0];
  let slotBDuration = slotsB[0][1] - slotsB[0][0];
  // Check time slots are long enough
  if (dur <= slotADuration) {
    if (dur <= slotBDuration) {
      //if so, check overlap is long enough
      let start = slotsA[0][0] > slotsB[0][0] ? slotsA : slotsB;
      let finish = slotsA[0][0] > slotsB[0][0] ? slotsB : slotsA;
      // if overlap is long enough, return start and finish
      if (finish[0][1] - start[0][0] >= dur) {
        let possStart = start[0][0];
        let possFinish = start[0][0] + dur;
        return [possStart, possFinish];
      } else {
        // else check the next in the series
        let newSlotsA = slotsA.slice(1);
        let newSlotsB = slotsB.slice(1);
        if (newSlotsA.length > 0 && newSlotsB.length > 0) {
          return meetingPlanner(newSlotsA, newSlotsB, dur);
        } else {
          return [];
        }
      }
    } else {
      let newslotsB = slotsB.slice(1);
      if (newslotsB.length > 0) {
        return meetingPlanner(slotsA, newslotsB, dur);
      } else {
        return [];
      }
    }
  } else {
    let newslotsA = slotsA.slice(1);
    if (newslotsA.length > 0) {
      return meetingPlanner(newslotsA, slotsB, dur);
    } else {
      return [];
    }
  }
}
