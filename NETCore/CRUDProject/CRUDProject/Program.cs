using CRUDProject.Models;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace CRUDProject
{
    class Program
    {
        static void Main(string[] args)
        {
            Program.getPeople();
            Console.ReadLine();
            Program.addPeople();
            Console.ReadLine();
            Program.removePeople();
            Console.ReadLine();
            Program.updatePeople();
            Console.ReadLine();
        }

        public static void getPeople()
        {
            studydbContext dbContext = new studydbContext();
            var peopleList = dbContext.People.Where(prop => true).ToList();

            foreach (var item in peopleList)
            {
                Console.WriteLine(item.Name);
            }
        }

        public static void addPeople()
        {
            studydbContext dbContext = new studydbContext();
            People newPeople = new People()
            {
                Name = "LALA" + DateTime.Now.ToShortDateString()
            };

            dbContext.People.Add(newPeople);
            dbContext.SaveChanges();
        }

        public static void removePeople()
        {
            studydbContext dbContext = new studydbContext();
            var peopleList = dbContext.People.FirstOrDefault();

            dbContext.People.Remove(peopleList);
            dbContext.SaveChanges();
        }

        public static void updatePeople()
        {
            studydbContext dbContext = new studydbContext();
            var peopleList = dbContext.People.FirstOrDefault();
            peopleList.Name = "Updated";
            dbContext.Entry(peopleList);
            dbContext.SaveChanges();
        }

    }

    
}
