using System;
using System.Collections.Generic;

#nullable disable

namespace HBRPractNet.Models
{
    public partial class Usuario
    {
        public int UsuarioId { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public bool IsAdmin { get; set; }
    }
}
