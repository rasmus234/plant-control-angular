import {Plant} from "./plant.model";
import {Logger} from "./logger.model";

export interface Pairing {
  _id: string,
  name: string,
  createdAt: Date,
  plant: Plant,
  logger: Logger
}
