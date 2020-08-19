export interface AsteroidModel {
  name: string;
  designation: string;
  absolute_magnitude_h: string;
  estimated_diameter: AsteroidParamsModel;
}

interface AsteroidParamsModel {
  kilometers: {
    estimated_diameter_min: number,
    estimated_diameter_max: number,
  };
}
