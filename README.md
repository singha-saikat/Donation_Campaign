## Q1 : Add at least 3 Project features

"Donation Campaign" React application has several interesting features. Here are three of them in more detail:

- Dynamic Loaded Cards
- Card Details & Donate Page
- Statistics Page

## Dynamic Loaded Cards

**Card Grouping:** Dynamic loaded cards are components that group and display information about different campaigns or causes within in this application.
These cards are generated dynamically based on the data have,
in json file which means I can easily add or remove campaigns without changing the underlying code.

**Distinct Colors:** One of the distinguishing features of these cards is that they have different colors within the same group or category.
This color-coding can help users quickly differentiate between various campaigns or causes.
For example, if have campaigns related to different types of charities (e.g., health, education, food,cloth), might assign a unique color to each category.

## Card Details & Donate Page

**Card Details:** The details page provides in-depth information about a specific campaign.
It includes a "Donate" button, allowing users to contribute to the campaign.
When a user clicks "Donate," the donation data is stored in local storage.

**Donate Page:** The donate page retrieves and displays donation data from local storage.
It dynamically adds color previews, likely representing the colors of the cards corresponding to each donation.

## Statistics Page

- The statistics page offers insights into the donation campaign.
- It might display a pie chart comparing the total donations received to the user's contributions.
- This chart can help users understand their impact within the context of the entire campaign.
