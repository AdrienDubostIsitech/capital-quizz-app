export const AnswerComponent = (props:
    { 
        answer: string[];
        onSelect: (answer: string) => void;
    }
  ) => {

  function handleClick(value:string) {
    props.onSelect(value);
  }
  

  return (
    <div>
      <button className="block mt-4 border border-gray-300 rounded-lg py-2 px-6 text-lg hover:bg-gray-100 cursor-pointer w-full" 
      onClick={() => handleClick(props.answer[0])}>
        <p>{props.answer[0]}</p>
      </button>
      <button className="block mt-4 border border-gray-300 rounded-lg py-2 px-6 text-lg hover:bg-gray-100 cursor-pointer w-full" 
      onClick={() => handleClick(props.answer[1])}>
        <p>{props.answer[1]}</p>
      </button>
      <button className="block mt-4 border border-gray-300 rounded-lg py-2 px-6 text-lg hover:bg-gray-100 cursor-pointer w-full" 
      onClick={() => handleClick(props.answer[2])}>
        <p>{props.answer[2]}</p>
      </button>
      <button className="block mt-4 border border-gray-300 rounded-lg py-2 px-6 text-lg hover:bg-gray-100 cursor-pointer w-full" 
      onClick={() => handleClick(props.answer[3])}>
        <p>{props.answer[3]}</p>
      </button>
    </div>
  );
}
