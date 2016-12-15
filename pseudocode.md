#index.js = linker thing

#Game (component)
	#header
	#GameBox (component)
		#Feedback (component) - store.proximity
		#GuessContainerBox (component)
			#Form (component)
				#GuessInput
				#GuessButton = gets new_guess function for onClick
			#GuessCount (component) - store.guesses
		#GuessesBox (component) - store.guesses
			#GuessedNumber (component)



			  //   #GuessesBox (component) (render once w/ guesses="[]" and once w/ guesses=[1,2])
			  //     #GuessedNumber (component) (will need a prop)
