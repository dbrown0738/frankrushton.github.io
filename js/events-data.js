/* ============================================================
   EVENTS DATA — Single source of truth
   ------------------------------------------------------------
   To add, remove, or edit an event, just edit this list.
   Both the Home page and Events page pull from this file
   automatically — no need to edit any HTML.

   FIELDS:
   - date:  "YYYY-MM-DD" (used for sorting & filtering past events)
   - month: 3-letter month shown on the date badge, e.g. "JUN"
   - day:   day-of-month shown on the date badge, e.g. "14"
   - tag:   "social" | "meeting" | "volunteer" | "" (controls color)
   - tagLabel: text shown on the tag badge, e.g. "Social"
   - title: event name
   - description: full description (shown on Events page)
   - time, location, extra: shown as meta info on Events page
   ============================================================ */

const EVENTS = [
  {
    date: "2026-06-14",
    month: "JUN",
    day: "14",
    tag: "social",
    tagLabel: "Social",
    title: "Summer Block Party",
    description: "Our biggest event of the season! Join us for live music, food trucks, games for kids, and a chance to meet your neighbors. This year we're featuring a community raffle with prizes donated by local businesses.",
    time: "4:00 PM – 8:00 PM",
    location: "Rushton Park, Main Pavilion",
    extra: "Free & Open to All",
    extraIcon: "🆓",
    timeIcon: "🕓",
    locationIcon: "📍"
  },
  {
    date: "2026-06-24",
    month: "JUN",
    day: "24",
    tag: "meeting",
    tagLabel: "Meeting",
    title: "Monthly Board Meeting",
    description: "Our regular monthly meeting is open to all residents. June's agenda includes the park renovation project update, discussion of the new traffic calming proposal on Elm Street, and the upcoming officer elections.",
    time: "7:00 PM – 8:30 PM",
    location: "Community Center, Room 2",
    extra: "Open to Residents",
    extraIcon: "🆓",
    timeIcon: "🕖",
    locationIcon: "📍"
  },
  {
    date: "2026-07-12",
    month: "JUL",
    day: "12",
    tag: "volunteer",
    tagLabel: "Volunteer",
    title: "Neighborhood Cleanup Day",
    description: "Grab your gloves and join us for our quarterly cleanup! We'll be tackling the trail along the creek, the park entrance, and several alleys. Supplies provided. Volunteers of all ages welcome.",
    time: "9:00 AM – 12:00 PM",
    location: "Rushton Park Entrance",
    extra: "Volunteers Welcome",
    extraIcon: "🙋",
    timeIcon: "🕘",
    locationIcon: "📍"
  },
  {
    date: "2026-07-22",
    month: "JUL",
    day: "22",
    tag: "meeting",
    tagLabel: "Meeting",
    title: "Monthly Board Meeting",
    description: "July's meeting will cover the summer budget review, updates from the city planning commission regarding proposed development on Cedar Ave, and feedback on the block party. Childcare available on request.",
    time: "7:00 PM – 8:30 PM",
    location: "Community Center, Room 2",
    extra: "Open to Residents",
    extraIcon: "🆓",
    timeIcon: "🕖",
    locationIcon: "📍"
  },
  {
    date: "2026-08-09",
    month: "AUG",
    day: "9",
    tag: "social",
    tagLabel: "Social",
    title: "Back to School Cookout",
    description: "Celebrate the end of summer with a free cookout for neighborhood families. Activities for kids, school supply giveaway for those in need, and a chance to meet teachers from Rushton Elementary before the school year begins.",
    time: "2:00 PM – 6:00 PM",
    location: "Rushton Park, East Shelter",
    extra: "Free & Family Friendly",
    extraIcon: "🆓",
    timeIcon: "🕑",
    locationIcon: "📍"
  },
  {
    date: "2026-10-05",
    month: "OCT",
    day: "5",
    tag: "meeting",
    tagLabel: "Meeting",
    title: "Annual General Meeting & Elections",
    description: "The most important meeting of the year! Review the annual financial report, vote on bylaw amendments, and elect next year's board officers. All residents aged 18+ in good standing may vote. Light refreshments served.",
    time: "6:00 PM – 8:30 PM",
    location: "Community Center, Main Hall",
    extra: "Voting Members Welcome",
    extraIcon: "🗳️",
    timeIcon: "🕕",
    locationIcon: "📍"
  }
];

/* ============================================================
   RENDER HELPERS — usually no need to edit below this line
   ============================================================ */

// Map a tag name to its CSS class (see .event-tag styles in style.css)
function eventTagClass(tag) {
  switch (tag) {
    case "social": return "event-tag social";
    case "meeting": return "event-tag meeting";
    case "volunteer": return "event-tag" + ' style="background:#e8f5e9;color:#2e7d32;"';
    default: return "event-tag";
  }
}

// Returns events sorted chronologically, optionally only future events
function getSortedEvents(onlyUpcoming = false) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return EVENTS
    .filter(ev => !onlyUpcoming || new Date(ev.date) >= today)
    .sort((a, b) => new Date(a.date) - new Date(b.date));
}

// Builds the small "preview row" HTML used on the Home page
function renderEventPreviewRow(ev) {
  return `
    <div class="event-row">
      <div class="event-date"><span class="date-month">${ev.month}</span><span class="date-day">${ev.day}</span></div>
      <div class="event-info">
        <h4>${ev.title}</h4>
        <p>${ev.location} • ${ev.time}</p>
      </div>
      <a href="events.html" class="event-link">Details →</a>
    </div>
  `;
}

// Builds the full "event card" HTML used on the Events page
function renderEventCard(ev) {
  let tagHtml;
  if (ev.tag === "volunteer") {
    tagHtml = `<span class="event-tag" style="background:#e8f5e9;color:#2e7d32;">${ev.tagLabel}</span>`;
  } else if (ev.tag === "social" || ev.tag === "meeting") {
    tagHtml = `<span class="event-tag ${ev.tag}">${ev.tagLabel}</span>`;
  } else {
    tagHtml = `<span class="event-tag">${ev.tagLabel}</span>`;
  }

  return `
    <div class="event-card">
      <div class="event-date">
        <span class="date-month">${ev.month}</span>
        <span class="date-day">${ev.day}</span>
      </div>
      <div class="event-body">
        ${tagHtml}
        <h3>${ev.title}</h3>
        <p>${ev.description}</p>
        <div class="event-meta">
          <span>${ev.timeIcon || "🕓"} <strong>${ev.time}</strong></span>
          <span>${ev.locationIcon || "📍"} <strong>${ev.location}</strong></span>
          <span>${ev.extraIcon || ""} <strong>${ev.extra}</strong></span>
        </div>
      </div>
    </div>
  `;
}

// Renders up to `count` upcoming events into the element with id `targetId`
// (used on the Home page)
function renderHomeEventsPreview(targetId, count = 3) {
  const target = document.getElementById(targetId);
  if (!target) return;

  const upcoming = getSortedEvents(true).slice(0, count);

  if (upcoming.length === 0) {
    target.innerHTML = `<p style="color:var(--text-mid);">No upcoming events at this time. Check back soon!</p>`;
    return;
  }

  target.innerHTML = upcoming.map(renderEventPreviewRow).join("");
}

// Renders ALL upcoming events (full cards) into the element with id `targetId`
// (used on the Events page)
function renderFullEventsList(targetId) {
  const target = document.getElementById(targetId);
  if (!target) return;

  const upcoming = getSortedEvents(true);

  if (upcoming.length === 0) {
    target.innerHTML = `<p style="color:var(--text-mid);">No upcoming events at this time. Check back soon!</p>`;
    return;
  }

  target.innerHTML = upcoming.map(renderEventCard).join("");
}
