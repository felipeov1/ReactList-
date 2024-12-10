import { useSearchParams } from "react-router-dom";
import Title from "../components/Title";

function TaskPage() {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  console.log(description);
  return (
    <div className="h-screen w-screen bg-slate-500 p-6">
      <div className="w-[500] space-y-4">
       <Title>Detalhes da Tarefa</Title>
        <div className="bg-slate-400 p-4 rounded-md">
          <h2 className="text-xl text-white font-bold">{title}</h2>
          <p className="text-white">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
