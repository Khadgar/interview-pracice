var groupIntervals = function (events) {
  const enrichedEvents = events.map((e) => ({ ...e, toTs: e.fromTs + e.dur }));
  const sortedEvents = enrichedEvents.sort((a, b) => a.fromTs - b.fromTs);
  const groups = {};
  let groupNo = 1;
  let top = sortedEvents[0];
  groups[groupNo] = [top];
  for (let i = 1; i < sortedEvents.length; i++) {
    if (top.toTs >= sortedEvents[i].fromTs) {
      if (groups[groupNo]) {
        groups[groupNo].push(sortedEvents[i]);
        top = sortedEvents[i];
      } else {
        groupNo++;
        groups[groupNo] = [top];
        top = sortedEvents[i];
      }
    } else {
      top = sortedEvents[i];
      groupNo++;
      groups[groupNo] = [top];
    }
  }
  return groups;
};

const events = [
  { fromTs: 3, dur: 3, desc: 'event1' },
  { fromTs: 4, dur: 4, desc: 'event1_overlap' },
  { fromTs: 5, dur: 4, desc: 'event2' },
  { fromTs: 10, dur: 2, desc: 'event3' },
  { fromTs: 10, dur: 6, desc: 'event4' },
  { fromTs: 11, dur: 8, desc: 'event5' },
  { fromTs: 16, dur: 2, desc: 'event5' },
  { fromTs: 21, dur: 1, desc: 'event5_overlap' },
];

console.log(groupIntervals(events));
