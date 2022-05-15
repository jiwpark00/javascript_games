# javascript_games
Freecodecamp tutorial walkthrough with Javascript

# Following the video from this link:
https://www.youtube.com/watch?v=ec8vSKJuZTk

# Most notable distinctions/enhancements from the walkthrough
- At times, I make changes that I feel add values to this repo so it's not just repeating what the instructor shows. These are some of the changes (there may be others that I don't document here in time) as relating to each project.

## Rock Paper Scissors
- I don't apply switch/case statements here (neither does the instructor), but I apply nested loops instead of just many if conditions for win/loss/draw combinations.

## Memory Game
- I use custom images from Unsplash and individual owners are mentioned in the project README.
- Because I had all different images, I created an addition in Javascript to manually change the size of each image to have a consistent set of tiles for the board. This is not covered in the video as the recommendation there was to use the same images provided.
- At the end of the video, alert is created when the user clicks the same image twice. However, doing so originally led the image to be marked off as if this was actually two correct guesses. My version "resets" even in this case.
- I also disabled the number of alerts for better user experience (too much alerts = not good).
- Lastly, I added a new variable to be printed in the HTML page showing the number of tries. This way, the user understands how the performance on guess is going.
