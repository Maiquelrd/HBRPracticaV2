using System;

#nullable disable

namespace HBRPractNet.Models
{
    public partial class Producto
    {
        public int ProductoId { get; set; }
        public int? CategoriaId { get; set; }
        public string Nombre { get; set; }
        public string Descripcion { get; set; }
        public string Precio { get; set; }
        public DateTime? FechaCreado { get; set; }

        public virtual Categoria Categoria { get; set; }
    }
}
