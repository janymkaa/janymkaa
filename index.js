const a = [
  {
    day: "ПН",
    data: [
      {
        time: "8:00",
        name: "front",
        ayd: "401",
      },
      {
        time: "8:00",
        name: "front",
        ayd: "401",
      },
    ],
  },
  {
    day: "ВТ",
    data: [
      {
        time: "8:00",
        name: "front",
        ayd: "401",
      },
      {
        time: "8:00",
        name: "front",
        ayd: "401",
      },
    ],
  },
  {
    day: "СР",
    data: [
      {
        time: "8:00",
        name: "front",
        ayd: "401",
      },
      {
        time: "8:00",
        name: "front",
        ayd: "401",
      },
    ],
  },
  {
    day: "ЧТ",
    data: [
      {
        time: "8:00",
        name: "front",
        ayd: "401",
      },
      {
        time: "8:00",
        name: "front",
        ayd: "401",
      },
    ],
  },
  {
    day: "ПТ",
    data: [
      {
        time: "8:00",
        name: "front",
        ayd: "401",
      },
      {
        time: "8:00",
        name: "front",
        ayd: "401",
      },
    ],
  },
  {
    day: "СБ",
    data: [
      {
        time: "8:00",
        name: "front",
        ayd: "401",
      },
      {
        time: "8:00",
        name: "front",
        ayd: "401",
      },
    ],
  },
  {
    day: "ОБЭЭД"
  }
];

const b = document.querySelectorAll(".qwerty");
b.forEach((r) => {
  a.forEach((i) => {
    if (r.querySelector(".day").textContent == i.day) {
      if (r.querySelector(".day").textContent == "ПН") {
        i.data.forEach((p) => {
          r.innerHTML += `
            <div class="box1">
                <div class="time">${p.time}</div>
                <div class="pred">${p.name}</div>
            </div>
            <div class="kb">${p.ayd} кб.</div>
    `;
        });
      } else {
        i.data.forEach((p) => {
          r.innerHTML += `
            <div class="box1">
                <div class="pricol">${p.name}</div>
            </div>
            <div class="kb">${p.ayd} кб.</div>
    `;
        });
      }
    }
  });
});
