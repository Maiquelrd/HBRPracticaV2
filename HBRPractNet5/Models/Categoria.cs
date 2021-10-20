using System;
using System.Collections.Generic;

#nullable disable

namespace HBRPractNet.Models
{
    public partial class Categoria
    {
        public Categoria()
        {
            Productos = new HashSet<Producto>();
        }

        public int CategoriaId { get; set; }
        public string Nombre { get; set; }
        public string Descripcion { get; set; }
        public DateTime? FechaCreado { get; set; }

        public virtual ICollection<Producto> Productos { get; set; }
    }
}
