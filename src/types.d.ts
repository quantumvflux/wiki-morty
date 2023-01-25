interface Character {
  id: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
}

interface Locations {
  id: number;
  name: string;
  type: string;
  dimension: string;
}

type SetShowInfo = (bool) => void;
