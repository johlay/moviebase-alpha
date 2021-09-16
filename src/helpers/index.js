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

// finalize the url for showing specific image from TMDB API, by declaring width and path (profile-path, backdrop-path or poster-path)
export const getImage = (width, path) => {
  return `https://image.tmdb.org/t/p/w${width}` + path;
};
