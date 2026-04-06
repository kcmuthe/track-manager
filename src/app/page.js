import Image from "next/image";

export default function Home() {
  return (
    <div Hello World>
    </div>
  );
}
import TaskCard from '@/components/TaskCard';

export default function HomePage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Task Manager</h1>
      {tasks.map(task => (
        <TaskCard
          key={task.id}
          id={task.id}
          title={task.title}
          done={task.done}
          onToggle={onToggle}
        />
      ))}
    </main>
  );
}



  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Task Manager</h1>
      <TaskCard title="Buy milk"    done={false} />
      <TaskCard title="Write tests" done={true}  />
      <TaskCard title="Ship it"     done={false} />
    </main>
  );

