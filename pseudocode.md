#index.js = linker thing

#Game (component)
	#header
	#GameBox (component)
		Feedback (component) - store.proximity
		GuessContainerBox (component) - new_guess function w/ parameter GuessInput value
				(sends actions check_closeness, new_guess, check_won)
			Form (component)#
				GuessInput
				GuessButton = gets new_guess function for onClick
			GuessCount (component) - store.guesses
		GuessesBox (component) - store.guesses
			-- take in an array of numbers
			-- map each number to a guess number object
			-- return mapped array
			GuessedNumber (component)
