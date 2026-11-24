// Usamos el tipo compartido para comprobar la estructura de los datos
import type { Developer } from "../types/developers";

// Lista local de perfiles: cada objeto debe cumplir la interfaz Developer
export const developers: Developer[] = [
  {
    id: 1,
    name: "Maria Rodriguez",
    role: "Frontend",
    skills: ["Mongo", "HTML", "CSS", "Javascript"],
    available: true,
  },
  {
    id: 2,
    name: "Angel Caridad",
    role: "Backend",
    skills: ["Mongo", "Diseño", "HTML", "CSS", "JS"],
    available: true,
  },
  {
    id: 3,
    name: "Alberto Rojas",
    role: "Full Stack",
    skills: ["Cocinar", "Desarrollo", "React", "VUEJS"],
    available: false,
  },
];
