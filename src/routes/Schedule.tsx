import React from 'react';
import teamList from '../constants/teamsList';
import './Schedule.scss';

function getNameFromId(id: string): string {
  return teamList.filter((team) => team.teamId === id)[0].fullName;
}
export default function Schedule() {
  const [schedule, setSchedule] = React.useState([]);

  React.useEffect(() => {
    fetch(
      'https://data.nba.net/data/10s/prod/v1/2021/teams/sixers/schedule.json'
    )
      .then((r) => r.json())
      .then((r) => setSchedule(r.league.standard))
      .catch((error) => console.error(error));
  }, []);
  return (
    <section className='schedule'>
      <h1>Schedule</h1>
      <ul>
        {schedule.map((game) => {
          return (
            <li key={game.gameId}>
              <h1>
                {getNameFromId(game.hTeam.teamId)} -{' '}
                {getNameFromId(game.vTeam.teamId)}
              </h1>
              <p>
                {game.hTeam.score} - {game.vTeam.score}
              </p>
              {game.isHomeTeam ? 'Home' : 'Away'}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
