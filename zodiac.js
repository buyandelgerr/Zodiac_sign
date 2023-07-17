const zodiacSigns = [
  {
    name: "Aries d",
    definition:
      "The first sign of the Zodiac, Aries are the trailblazers. Passionate and independent, Aries will never do something just because everyone else is doing it—a Ram needs to be 100 percent committed to the task at hand. Competitive to the max, the best way to motivate an Aries is to turn something into a contest. Aries will put everything they have (and then some) into winning. Loyal, smart, and impulsive, they always have multiple projects on their mind, and won't be satisfied until their work, social life, and personal lives line up exactly with the dream life they've envisioned. Those who are drawn to magnetic Aries may have trouble keeping up—but if they can, they'll have a friend for life.",
    picture:
      "https://th.bing.com/th/id/R.554e3a8301234e3c6214e84163dd6427?rik=zQS5RkbxftDt3A&riu=http%3a%2f%2fwww.astrologyhub.com%2fwp-content%2fuploads%2faries.png&ehk=oHRvnfm1c4%2f9lA4N5r45wFb278VHjQKE%2fbCRCNhJB74%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    name: "Taurus",
    definition:
      "Smart, ambitious, and trustworthy, Taurus is the anchor of the Zodiac. Amazing friends, colleagues, and partners, Taureans value honesty above all else and are proud that their personal relationships tend to be drama free. Bulls get the reputation of being stubborn, but they're not always stuck in their ways. This searching sign is willing to see another point of view, but they won't flip-flop on an opinion just to make someone else happy. They will shift their thinking only if they truly have a change of heart.",
    picture:
      "https://i0.wp.com/www.listland.com/wp-content/uploads/2019/02/Zodiac-Sign.jpg?fit=1000%2C1000&quality=90&strip=all&ssl=1",
  },
  {
    name: "Gemini",
    definition:
      "Smart, passionate, and dynamic, Gemini is characterized by the Twins, Castor and Pollux, and is known for having two different sides they can display to the world. Expert communicators, Gemini is the chameleon of the Zodiac, adept at blending into different groups based on the vibe and energy they perceive. While they're also amazing at showcasing surface traits, the Gemini well runs deep, which is why the Twins are one of the Zodiac's most emotionally intelligent signs.",
    picture:
      "https://cdn4.vectorstock.com/i/1000x1000/57/83/abstract-zodiac-sign-gemini-on-a-dark-vector-18335783.jpg",
  },
  {
    name: "Cancer",
    definition:
      "Emotional, intuitive, and practically psychic; ruled by the moon and characterized by the crab, Cancer has so much going on in its watery depths. Cancer signs may seem prickly and standoffish at first meeting, once they make the decision to become friends with someone, that person has a friend for life.",
    picture:
      "https://th.bing.com/th/id/R.b49c7edabce0aa40df93ed1354911bfe?rik=%2bbYCiODatMoXsw&riu=http%3a%2f%2fwww.astrologyhub.com%2fwp-content%2fuploads%2fcancer.png&ehk=H1zA77y9qMqzyrqLgtLH459YOQjJ8QCaVchGBXDT6oU%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    name: "Leo",
    definition:
      "Bold, intelligent, warm, and courageous, fire sign Leo is a natural leader of the Zodiac, ready to blaze a trail, vanquish injustice, and make a name for themselves along the way. Blessed with high self-esteem, Lions know that they possess enviable traits—and they're proud of them. They don't believe in false modesty and will be the first to praise themselves for a job well done. But Leo isn't self-aggrandizing or unwilling to roll up those sleeves and do the work: this sign knows that in order to be respected and admired, he or she needs to put in the effort worthy of a leader.",
    picture: "https://www.astrologyhub.com/wp-content/uploads/leo.png",
  },
  {
    name: "Virgo",
    definition:
      "Smart, sophisticated, and kind, Virgo gets the job done without complaining. Virgos are amazing friends, always there to lend a hand and also lend advice. Practical Virgos are incredibly adept at big picture thinking, and planning out their life, their vacations, and what they're going to do today isn't a drag it makes them feel in control and secure.",
    picture: "https://www.astrologyhub.com/wp-content/uploads/virgo.png",
  },
  {
    name: "libra",
    definition:
      "Intelligent, kind, and always willing to put others before themselves, Libras value harmony in all forms. Ruled by Venus, the planet of beauty, Libra adores a life that looks good. As the master of compromise and diplomacy, Libra is adept at seeing all points of view, and excels at crafting compromises and effecting mediation between others. This sign has a rich inner life yet loves other people, and they're always happiest with a large group of friends, family, and coworkers on whom they can count.",
    picture:
      "https://th.bing.com/th/id/OIP.Pr4DCeYbxp1RtwXbnF0HXgHaHa?pid=ImgDet&rs=1",
  },
  {
    name: "Scorpio",
    definition:
      "Passionate, independent, and unafraid to blaze their own trail no matter what others think, Scorpio signs make a statement wherever they go. They love debates, aren't afraid of controversy, and won't back down from a debate. They also hate people who aren't genuine, and are all about being authentic—even if authentic isn't pretty.",
    picture:
      "https://th.bing.com/th/id/OIP.21hJxcojf6N5BD8XFdMmqAHaHa?pid=ImgDet&rs=1",
  },
  {
    name: "Sagittarius",
    definition:
      "Independent and strong-willed, Sagittarius personalities are all about going off the beaten path. Sagittarius isn’t afraid to step away from the pack, and is a natural born leader who goes after what he or she wants, regardless of what other people think. Sagittarius is a born adventurer, and loves solo travel and exploration. Sagittarius also loves exploring the inner workings of their minds, and love stretching their horizons through a good book or movie.",
    picture:
      "https://th.bing.com/th/id/R.d360d220b8a3055192029e3910f35d12?rik=x%2bEckEw%2fkKHAVg&riu=http%3a%2f%2fwww.astrologyhub.com%2fwp-content%2fuploads%2fsagittarius.png&ehk=qpqBKf4U7bvwt%2b7dYl6N0Lahx6S4ZJjS4HZf%2fZbplYE%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    name: "Capricorn",
    definition:
      "Smart, hardworking, and fully in control of their destiny, Capricorn signs will always get what they set their mind to, in both personal and professional life—no excuses. Capricorns may get a reputation as stubborn, but they simply know what they want, and also know how they wish other people would behave.",
    picture:
      "https://th.bing.com/th/id/OIP.f-7VE-GEgJ1V5_Yb0iaeVgHaEK?pid=ImgDet&rs=1",
  },
  {
    name: "Aquarius",
    definition:
      "Independent and enigmatical, Aquarians are unique. There is no one quite like an Aquarius, and because each is so incredibly individual, it can be tough to describe them as a group. Aquarians don't like labels, and may shy away from any adjective—even the good ones you might bestow upon them. Aquarians believe in the nature of change and evolution, and even though they're a fixed sign, they may not necessarily believe they are the same people they were when they were born.",
    picture:
      "https://th.bing.com/th/id/R.b931cf08ea7d7cf20c3d54cc96e641c1?rik=QscRfml8zHAXLw&riu=http%3a%2f%2fwww.astrologyhub.com%2fwp-content%2fuploads%2faquarius.png&ehk=aDpnWFYZSTiAAbeu3EwhM2ItXFgFlVrdggoDPvlvr1Y%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    name: "Pisces",
    definition:
      "Smart, creative, and deeply intuitive, Pisces can be close to psychic. Pisces feel things deeply, and have incredibly strong gut reactions. A Pisces knows things from deep within, and can often judge whether a person or situation is good or bad. That doesn't mean a Pisces ignores the logical part of their brain, though. Deeply intelligent, Pisces have a profound respect for the power of the human mind. Is it a surprise that Albert Einstein was a Pisces?",
    picture:
      "https://th.bing.com/th/id/OIP.9syP7YWqDMQEqMwqlZsHMQHaHa?pid=ImgDet&rs=1",
  },
];
function findZodiacSign(month, date) {
  month -= 1;
  if (month < 0 || month > 11 || date < 1 || date > 31) {
    return null;
  }
  let index;
  if ((month === 3 && date >= 21) || (month === 4 && date <= 19)) {
    index = 0;
  } else if ((month === 4 && date >= 20) || (month === 5 && date <= 20)) {
    index = 1;
  } else if ((month === 5 && date >= 21) || (month === 6 && date <= 20)) {
    index = 2;
  } else if ((month === 6 && date >= 21) || (month === 7 && date <= 22)) {
    index = 3;
  } else if ((month === 7 && date >= 23) || (month === 8 && date <= 22)) {
    index = 4;
  } else if ((month === 8 && date >= 23) || (month === 9 && date <= 22)) {
    index = 5;
  } else if ((month === 9 && date >= 23) || (month === 10 && date <= 22)) {
    index = 6;
  } else if ((month === 10 && date >= 23) || (month === 11 && date <= 21)) {
    index = 7;
  } else if ((month === 11 && date >= 22) || (month === 12 && date <= 21)) {
    index = 8;
  } else if ((month === 12 && date >= 22) || (month === 1 && date <= 19)) {
    index = 9;
  } else if ((month === 1 && date >= 20) || (month === 2 && date <= 18)) {
    index = 10;
  } else if ((month === 2 && date >= 19) || (month === 3 && date <= 20)) {
    index = 11;
  }
  return index !== undefined ? zodiacSigns[index] : null;
}
function displayZodiacSign() {
  const monthInput = document.querySelector('input[name="month"]');
  const dateInput = document.querySelector('input[name="date"]');
  const resultContainer = document.createElement("div");
  resultContainer.classList.add("result-container");

  const month = monthInput.value;
  const date = dateInput.value;
  const zodiacSign = findZodiacSign(month, date);

  if (zodiacSign) {
    const result = document.createElement("div");
    result.classList.add("result");
    result.innerHTML = `
        <h3>${zodiacSign.name}</h3>
        <p>${zodiacSign.definition}</p>
        <img src="${zodiacSign.picture}" alt="${zodiacSign.name}" style="max-width: 200px; max-height: 200px;" />
      `;
    resultContainer.appendChild(result);
  }
  document.body.innerHTML = "";
  document.body.appendChild(resultContainer);
}
const submitButton = document.querySelector(".btn");
submitButton.addEventListener("click", displayZodiacSign);
