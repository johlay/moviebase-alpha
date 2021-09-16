// interpret actor's gender based on TMDB api's returned data information.
export const intrepretActorGender = (gender) => {
  switch (gender) {
    case 0: {
      return "N/A";
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

// check if received information has a length of 0 or undefined. If so, return question marks.
export const checkInformation = (detail) => {
  switch (detail?.length) {
    case 0: {
      return "N/A";
    }

    case null: {
      return "N/A";
    }

    case undefined: {
      return "N/A";
    }

    default: {
      return detail;
    }
  }
};

// finalize the url for showing specific image from TMDB API, by declaring width and path (profile-path, backdrop-path or poster-path)
export const getImage = (width, path) => {
  switch (path) {
    case null: {
      return "";
    }

    case undefined: {
      return "";
    }

    case path: {
      return `https://image.tmdb.org/t/p/w${width}` + path;
    }
  }
};
