using Microsoft.EntityFrameworkCore;
using Store.Entity;

namespace Store.Data
{
    public class StoreContext : DbContext
    {
        public StoreContext(DbContextOptions<StoreContext> options) : base(options) { }

        public DbSet<Product> products { get; set; } // Correct property
    }
}
