// String Interpolation (Template Literals)

const name = "Arsenic";
const name2 = new String("Lucifer");
console.log(name, name2);
console.log(typeof name, typeof name2);
console.log(name.length, name2.length);
console.log(name.toUpperCase(), name2.toUpperCase());
console.log(name.toLowerCase(), name2.toLowerCase());
console.log(name.substring(0, 3), name2.substring(0, 3));
console.log(name.split(""), name2.split(""));
console.log(name.charAt(0), name2.charAt(0));
console.log(name.indexOf("s"), name2.indexOf("s"));
console.log(name.lastIndexOf("s"), name2.lastIndexOf("s"));
console.log(name.includes("s"), name2.includes("s"));
console.log(name.startsWith("A"), name2.startsWith("A"));
console.log(name.endsWith("c"), name2.endsWith("c"));
console.log(name.repeat(5), name2.repeat(5));
console.log(
  name.replace("Arsenic", "Lucifer"),
  name2.replace("Lucifer", "Arsenic")
);
console.log(name.trim(), name2.trim());
console.log(name.concat(" ", name2), name2.concat(" ", name));
console.log(name.concat(" ", name2).split(" "));
console.log(name.concat(" ", name2).split(" ").join(" "));
console.log(
  name.concat(" ", name2).split(" ").join(" ").replace("Arsenic", "Lucifer")
);
