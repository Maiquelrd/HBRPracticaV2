using HBRPractNet.Models;
using HBRPractNet.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HBRPractNet.Components
{
    public class UsuariosComponent : ViewComponent
    {
        private HBR_PracticaContext _context;
        public UsuariosComponent(HBR_PracticaContext context)
        {
            _context = context;
        }

        public async Task<IViewComponentResult> InvokeAsync()
        {
            List<UsuariosViewModel> usuarios = new List<UsuariosViewModel>();

            foreach (Usuario usuario in _context.Usuarios.ToList())
            {
                usuarios.Add(new UsuariosViewModel()
                { Usuario = usuario });
            }
            return View(usuarios);
        }
    }
}
