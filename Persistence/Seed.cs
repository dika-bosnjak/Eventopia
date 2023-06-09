using Domain;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context)
        {
            if (context.Activities.Any()) return;

            var activities = new List<Activity>
            {
                new Activity
                {
                    Title = "Sarajevo Film Festival",
                    Date = DateTime.UtcNow.AddMonths(2),
                    Description = "The Sarajevo Film Festival is the premier and largest film festival in Southeast Europe, and is one of the largest film festivals in Europe.",
                    Category = "film",
                    City = "Sarajevo",
                    Venue = "Meeting Point cinema",
                },
                new Activity
                {
                    Title = "Japodski otoci",
                    Date = DateTime.UtcNow.AddMonths(-1),
                    Description = " Traveling to Bihać offers a unique opportunity to explore the natural beauty of the region.",
                    Category = "travel",
                    City = "Bihać",
                    Venue = "Turističko naselje- Japodski otoci",
                },
                new Activity
                {
                    Title = "Tvrđava Travnik",
                    Date = DateTime.UtcNow.AddMonths(1),
                    Description = "Tvrđava Travnik, also known as the Travnik Fortress, is a historical fortress located in the city of Travnik, Bosnia and Herzegovina. Travnik itself is a charming town situated in the central part of the country, known for its rich history and cultural heritage.",
                    Category = "culture",
                    City = "Travnik",
                    Venue = "Travnik Fortress",
                },
                new Activity
                {
                    Title = "Zenica Summer Fest",
                    Date = DateTime.UtcNow.AddMonths(2),
                    Description = "Summer music festivals span multiple days and showcase a diverse range of music genres, including rock, pop, hip-hop, electronic, folk, and more.",
                    Category = "music",
                    City = "Zenica",
                    Venue = "Trg Alije Izetbegovića",
                },
                new Activity
                {
                    Title = "Šankanje",
                    Date = DateTime.UtcNow.AddMonths(-6),
                    Description = "Šankanje is an event that takes place during the winter season, typically featuring a variety of activities, performances, and attractions on Vlašić. ",
                    Category = "travel",
                    City = "Travnik",
                    Venue = "Vlašić",
                }
            };

            await context.Activities.AddRangeAsync(activities);
            await context.SaveChangesAsync();
        }
    }
}