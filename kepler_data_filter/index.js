import { createReadStream } from "fs";
import { parse } from "csv-parse";

const result = [];

const isHabitablePlanet = (planet) => {
  return (
    planet["koi_disposition"] == "CONFIRMED" &&
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6
  );
};

createReadStream("kepler.csv")
  .pipe(parse({ comment: "#", columns: true }))
  .on("data", (data) => {
    if (isHabitablePlanet(data)) result.push(data);
  })
  .on("error", (error) => {
    console.log(`Error: ${error}`);
  })
  .on("end", () => {
    console.log(result.length);
    console.log("End");
  });
