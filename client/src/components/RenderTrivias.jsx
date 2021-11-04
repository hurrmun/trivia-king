import TriviaCard from "./TriviaCard";
import trivias from "../fakeData.js";

const RenderTrivias = (props) => {
  return trivias.map((trivia, index) => {
    if (props.showAmount === "all") {
      return (
        <TriviaCard
          id=""
          title={trivia.title}
          image={trivia.image}
          likes={trivia.likes}
          tags={trivia.tags}
        />
      );
    } else if (index < props.showAmount) {
      return (
        <TriviaCard
          id=""
          title={trivia.title}
          image={trivia.image}
          likes={trivia.likes}
          tags={trivia.tags}
        />
      );
    } else {
      return null;
    }
  });
};

export default RenderTrivias;