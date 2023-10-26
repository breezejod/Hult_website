import React from 'react';
import hult from '../assets/hult.png';

const teams = [
  {
    name: 'Team 1',
    members: ['Member 1', 'Member 2', 'Member 3'],
    description: 'Description of Team 1. Provide information about their goals and aspirations.',
  },
  {
    name: 'Team 2',
    members: ['Member 1', 'Member 2', 'Member 3'],
    description: 'Description of Team 2. Provide information about their goals and aspirations.',
  },
  {
    name: 'Team 3',
    members: ['Member 1', 'Member 2', 'Member 3'],
    description: 'Description of Team 3. Provide information about their goals and aspirations.',
  },
  {
    name: 'Team 4',
    members: ['Member 1', 'Member 2', 'Member 3'],
    description: 'Description of Team 4. Provide information about their goals and aspirations.',
  },
  {
    name: 'Team 5',
    members: ['Member 1', 'Member 2', 'Member 3'],
    description: 'Description of Team 5. Provide information about their goals and aspirations.',
  },
];

const Team = () => {
  return (
    <div className="pt-4 bg-gray-100 p-11">
      <h1 className="mb-8 text-4xl font-bold text-center">Hult Prize 2024 Teams</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
        <div className="p-4 bg-white rounded-lg shadow-lg">
          <img src={hult} alt="Team" className="object-cover w-full h-32 mb-4 rounded-md" />
          <h2 className="text-xl font-semibold">{teams[0].name}</h2>
          <ul className="text-gray-600">
            {teams[0].members.map((member, memberIndex) => (
              <li key={memberIndex}>{member}</li>
            ))}
          </ul>
          <p className="mt-4">{teams[0].description}</p>
        </div>

        <div className="p-4 bg-white rounded-lg shadow-lg">
          <img src={hult} alt="Team" className="object-cover w-full h-32 mb-4 rounded-md" />
          <h2 className="text-xl font-semibold">{teams[1].name}</h2>
          <ul className="text-gray-600">
            {teams[1].members.map((member, memberIndex) => (
              <li key={memberIndex}>{member}</li>
            ))}
          </ul>
          <p className="mt-4">{teams[1].description}</p>
        </div>
      </div>

      <div className="my-8 text-center">
        <div className="inline-block p-4 bg-white rounded-lg shadow-lg">
          <img src={hult} alt="Team" className="object-cover w-full h-32 mb-4 rounded-md" />
          <h2 className="text-xl font-semibold">{teams[2].name}</h2>
          <ul className="text-gray-600">
            {teams[2].members.map((member, memberIndex) => (
              <li key={memberIndex}>{member}</li>
            ))}
          </ul>
          <p className="mt-4">{teams[2].description}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
        <div className="p-4 bg-white rounded-lg shadow-lg">
          <img src={hult} alt="Team" className="object-cover w-full h-32 mb-4 rounded-md" />
          <h2 className="text-xl font-semibold">{teams[3].name}</h2>
          <ul className="text-gray-600">
            {teams[3].members.map((member, memberIndex) => (
              <li key={memberIndex}>{member}</li>
            ))}
          </ul>
          <p className="mt-4">{teams[3].description}</p>
        </div>

        <div className="p-4 bg-white rounded-lg shadow-lg">
          <img src={hult} alt="Team" className="object-cover w-full h-32 mb-4 rounded-md" />
          <h2 className="text-xl font-semibold">{teams[4].name}</h2>
          <ul className="text-gray-600">
            {teams[4].members.map((member, memberIndex) => (
              <li key={memberIndex}>{member}</li>
            ))}
          </ul>
          <p className="mt-4">{teams[4].description}</p>
        </div>
      </div>
    </div>
  );
};

export default Team;
