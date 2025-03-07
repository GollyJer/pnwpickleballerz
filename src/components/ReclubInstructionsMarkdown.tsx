import Markdown from "react-markdown";

export default function ReclubInstructionsMarkdown() {
  const markdown = `
# Create a Competition
### Pool Play with Playoff bracket
  1) Select the plus sign at the top right of the app.
  2) Create Competition > Continue Button.
  3) At the very top in the green box, select Add Club > Tap PNW Pickle Ballerz > Tap the Arrow button at the bottom right.

  ### Details
1) Choose Location > Club Green Meadows (or other if it's not there)
2) Approximate Start Time > Set to 1 hour before the competition will actually start.
### Timeline
 1) Registration Opens > leave the default
 2) Early Bird Deadline > leave the default
 3) Registration Deadline > Set to the day before the tournament starts.
 4) Duration > 1 Day

### Other
1) Level restrictions > None
2) Player restrictions > None
3) Participant Type > Team
	1) Max Teams > Set to the # of teams playing
	2) Number of players per team.
		1) Min > 2
		2) Max > 2
4) Competition fee > None
5) Privacy > Set to Private
6) Competition Name > PNW Pickleballerz - ...whatever the tourney is...

#### Press ~Next Step~ button.

## Setup Match Format
1) Select > Pool Play
2) Select > Single Game
3) Pool Stage
	1) Name > Pool
	2) Number of pools > 1
	3) Winners per pool > 4
4) Standings Calculation > Games Won
5) Tiebreaker Priority
	1) H2H Wins
	2) H2H Diff
	3) Score Diff
6) Playoffs
	1) Name > Playoffs
	2) 3rd Place Match > ON
	3) Consolation Stage > OFF
7) Other Settings
	1) Forfeit winning score > 2

#### Press the ~Review~ button.
#### Press the ~Confirm~ button.

Ideally this would be the last step. Everyone in the club is notified and can sign up. Signups would automatically close once the max number of players is met. Individuals and teams can sign up. Admins always have the ability to edit or change the tournament parameters if another team needs to be added, if another pool needs to be created, or people need to be removed, etc.

For now, we continue to 👇
### Adding Teams
1) On the Competition page, go to Registration > Teams
2) Press the ~Reserve~ button.
3) Enter the team name and press the ~Create~ button.
4) Under the Team heading, press a ~pluss~ button.
5) Choose ~Add club member~
6) Pick BOTH team members.
7) Press Add at the top right > Wait for the app to register the players.
8) Change the status from Pending to Confirm.
9) Press the BACK ARROW at the top left of the team page.
10) Go back to step 2 and repeat for each team.
### Adding Admins
Admins will be able to update any facet of the Tournament.
1) Go to Registration > Staff
2) Press the ~...~ button on the right side of the screen.
3) Choose ~Add Club Member~ from the menu.
4) Pick the persons to add as Admins.
### Adding Referees
Referees will be able to add/edit scores to any match. We set all players as Referees for this purpose.
1) Go to Registration > Teams > Confirmed
2) Tap a Team
3) Select a player.
4) Choose ~Referee~ from the menu.
5) Go back to step 3 and repeat for each player.
6) Go back to step 2 and repeat for each team.
  `;

  return (
    <div className="text-left">
      <Markdown>{markdown}</Markdown>
    </div>
  );
}
