// Union de literales: solo se admiten estos tres valores para el rol;
export type Role = "Frontend" | "Backend" | "Full Stack";

// Define la forma que deben cumplir los objetos que representa a los developers de este ejemplo
export interface Developer {
  // ID identificador numerico, entre otras cosas es el key que usaremos cuando hahamos el map
  id: number;
  name: string;
  role: Role;
  skills: string[];
  available: boolean;
}
