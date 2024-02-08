## Matt coding challenge

# Assumptions made
    - App should look identical to design brief wherever possible. There are some minor misalignments (e.g. icons on the flip card front faces aren't perfectly centered in the brief, but should be in the app)
    - The Introduction and Conclusion components should share the same CSS (except colour) since they're both text/img blocks, despite the brief having slightly different paddings/margins
    - Some edge cases should be addressed if time permits, such as adding overflow scrolls to cards with longer paragraphs of text, or skipping a card render if data.json has missing values for necessary keys
    - Do not use any extra npm packages to help with flip cards or tracking

# Planned workflow:
    1. Create components with placeholder content and ensure they render on screen
        a. Introduction
        b. Conclusion
    2. Link data.json and replace placeholder with content contained inside
    3. Create FlipCard component
        a. Define a responsive 2-col grid system for cards to slot into
        b. Test adding/removing cards from json to ensure correct rendering
        c. Create a variable to track which face a card should be showing
    4. Complete desktop styles for each component to render as depicted in brief.
        a. Index.css - for overwriting any necessary default browser styling 
        b. App.css - for "theme" styles (common font and styles used by more than one component)
        c. Component specific stylesheets to cover everything else
    5. Create variables to track:
        a. Whether the card has been completed
        b. Whether the conclusion should be shown
        c. Which cards should be disabled based on user progress
    6. Add green tick to cards when they're flipped
    7. Add display condition to conclusion box
    8. Add logic to track user's progress and remove disabled states from cards

    Note: this workflow did deviate a little at step 5 onwards in reality