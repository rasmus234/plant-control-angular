import {Plant} from "./plant.model";

type Statistic = { avg: number, min: number, max: number };

export interface Certificate {
  _id: string,
  createdAt: Date,
  plant: Plant,
  temperature: Statistic,
  humidity: Statistic,
  moisture: Statistic
}
