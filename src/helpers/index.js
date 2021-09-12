// interpret actor's gender based on TMDB api's returned data information.
export const intrepretActorGender = (gender) => {
  switch (gender) {
    case 0: {
      return "???";
    }
    case 1: {
      return "Female";
    }
    case 2: {
      return "Male";
    }
    default: {
      break;
    }
  }
};
