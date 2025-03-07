export default function ReclubInstructions() {
  return (
    <div className="py-24 bg-gray-900 text-left">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-400">
          Tournament Setup Guide
        </h2>
        <p className="text-gray-400  mb-12">
          Follow these step-by-step instructions to set up a competition in the
          <img
            src="/reclub_logo.jpeg"
            alt="Reclub Logo"
            className="inline-block w-6 h-6 mx-2"
          />
          Reclub app
        </p>

        <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 shadow-lg">
          <h3 className="text-2xl font-bold mb-6 text-emerald-400">
            Create a Competition with Pool Play with Playoff bracket
          </h3>

          <ol className="list-decimal pl-6 mb-8 space-y-2 text-gray-300 text-left">
            <li>Select the plus sign at the top right of the app.</li>
            <li>Create Competition &gt; Continue Button.</li>
            <li>
              At the very top in the green box, select Add Club &gt; Tap PNW
              Pickle Ballerz &gt; Tap the Arrow button at the bottom right.
            </li>
          </ol>

          <h4 className="text-xl font-semibold mb-3 text-blue-300">Details</h4>
          <ol className="list-decimal pl-6 mb-8 space-y-2 text-gray-300 text-left">
            <li>
              Choose Location &gt; Club Green Meadows (or other if it's not
              there)
            </li>
            <li>
              Approximate Start Time &gt; Set to 1 hour before the competition
              will actually start.
            </li>
          </ol>

          <h4 className="text-xl font-semibold mb-3 text-blue-300">Timeline</h4>
          <ol className="list-decimal pl-6 mb-8 space-y-2 text-gray-300 text-left">
            <li>Registration Opens &gt; leave the default</li>
            <li>Early Bird Deadline &gt; leave the default</li>
            <li>
              Registration Deadline &gt; Set to the day before the tournament
              starts.
            </li>
            <li>Duration &gt; 1 Day</li>
          </ol>

          <h4 className="text-xl font-semibold mb-3 text-blue-300">Other</h4>
          <ol className="list-decimal pl-6 mb-8 space-y-2 text-gray-300 text-left">
            <li>Level restrictions &gt; None</li>
            <li>Player restrictions &gt; None</li>
            <li className="mb-2">
              Participant Type &gt; Team
              <ol className="list-decimal pl-6 mt-2 space-y-2 ml-4 text-left">
                <li>Max Teams &gt; Set to the # of teams playing</li>
                <li className="mb-2">
                  Number of players per team.
                  <ol className="list-decimal pl-6 mt-2 space-y-2 ml-4 text-left">
                    <li>Min &gt; 2</li>
                    <li>Max &gt; 2</li>
                  </ol>
                </li>
              </ol>
            </li>
            <li>Competition fee &gt; None</li>
            <li>Privacy &gt; Set to Private</li>
            <li>
              Competition Name &gt; PNW Pickleballerz - ...whatever the tourney
              is...
            </li>
          </ol>

          <div className="bg-gray-700 rounded-md p-4 mb-8  text-blue-200 font-medium">
            Press <span className="text-emerald-300 font-bold">Next Step</span>{" "}
            button.
          </div>

          <h3 className="text-2xl font-bold mb-6 text-emerald-400">
            Setup Match Format
          </h3>
          <ol className="list-decimal pl-6 mb-8 space-y-2 text-gray-300 text-left">
            <li>Select &gt; Pool Play</li>
            <li>Select &gt; Single Game</li>
            <li className="mb-2">
              Pool Stage
              <ol className="list-decimal pl-6 mt-2 space-y-2 ml-4 text-left">
                <li>Name &gt; Pool</li>
                <li>Number of pools &gt; 1</li>
                <li>Winners per pool &gt; 4</li>
              </ol>
            </li>
            <li>Standings Calculation &gt; Games Won</li>
            <li className="mb-2">
              Tiebreaker Priority
              <ol className="list-decimal pl-6 mt-2 space-y-2 ml-4 text-left">
                <li>H2H Wins</li>
                <li>H2H Diff</li>
                <li>Score Diff</li>
              </ol>
            </li>
            <li className="mb-2">
              Playoffs
              <ol className="list-decimal pl-6 mt-2 space-y-2 ml-4 text-left">
                <li>Name &gt; Playoffs</li>
                <li>3rd Place Match &gt; ON</li>
                <li>Consolation Stage &gt; OFF</li>
              </ol>
            </li>
            <li className="mb-2">
              Other Settings
              <ol className="list-decimal pl-6 mt-2 space-y-2 ml-4 text-left">
                <li>Forfeit winning score &gt; 2</li>
              </ol>
            </li>
          </ol>

          <div className="bg-gray-700 rounded-md p-4 mb-4  text-blue-200 font-medium">
            Press the <span className="text-emerald-300 font-bold">Review</span>{" "}
            button.
          </div>
          <div className="bg-gray-700 rounded-md p-4 mb-8  text-blue-200 font-medium">
            Press the{" "}
            <span className="text-emerald-300 font-bold">Confirm</span> button.
          </div>

          <div className="mb-8 p-4 border-l-4 border-emerald-500 bg-gray-800 text-gray-300 italic text-left">
            Ideally this would be the last step. Everyone in the club is
            notified and can sign up. Signups would automatically close once the
            max number of players is met. Individuals and teams can sign up.
            Admins always have the ability to edit or change the tournament
            parameters if another team needs to be added, if another pool needs
            to be created, or people need to be removed, etc.
          </div>

          <div className="p-4 mb-6  bg-gray-700 rounded-md">
            <span className="text-blue-200">For now, we continue to</span> 👇
          </div>

          <h4 className="text-xl font-semibold mb-3 text-blue-300">
            Adding Teams
          </h4>
          <ol className="list-decimal pl-6 mb-8 space-y-2 text-gray-300 text-left">
            <li>On the Competition page, go to Registration &gt; Teams</li>
            <li>
              Press the <span className="font-semibold">Reserve</span> button.
            </li>
            <li>
              Enter the team name and press the{" "}
              <span className="font-semibold">Create</span> button.
            </li>
            <li>
              Under the Team heading, press a{" "}
              <span className="font-semibold">plus</span> button.
            </li>
            <li>
              Choose <span className="font-semibold">Add club member</span>
            </li>
            <li>Pick BOTH team members.</li>
            <li>
              Press Add at the top right &gt; Wait for the app to register the
              players.
            </li>
            <li>Change the status from Pending to Confirm.</li>
            <li>Press the BACK ARROW at the top left of the team page.</li>
            <li>Go back to step 2 and repeat for each team.</li>
          </ol>

          <h4 className="text-xl font-semibold mb-3 text-blue-300">
            Adding Admins
          </h4>
          <p className="mb-3 text-gray-400 italic text-left">
            Admins will be able to update any facet of the Tournament.
          </p>
          <ol className="list-decimal pl-6 mb-8 space-y-2 text-gray-300 text-left">
            <li>Go to Registration &gt; Staff</li>
            <li>
              Press the <span className="font-semibold">...</span> button on the
              right side of the screen.
            </li>
            <li>
              Choose <span className="font-semibold">Add Club Member</span> from
              the menu.
            </li>
            <li>Pick the persons to add as Admins.</li>
          </ol>

          <h4 className="text-xl font-semibold mb-3 text-blue-300">
            Adding Referees
          </h4>
          <p className="mb-3 text-gray-400 italic text-left">
            Referees will be able to add/edit scores to any match. We set all
            players as Referees for this purpose.
          </p>
          <ol className="list-decimal pl-6 mb-8 space-y-2 text-gray-300 text-left">
            <li>Go to Registration &gt; Teams &gt; Confirmed</li>
            <li>Tap a Team</li>
            <li>Select a player.</li>
            <li>
              Choose <span className="font-semibold">Referee</span> from the
              menu.
            </li>
            <li>Go back to step 3 and repeat for each player.</li>
            <li>Go back to step 2 and repeat for each team.</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
