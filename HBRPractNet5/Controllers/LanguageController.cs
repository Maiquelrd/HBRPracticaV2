using Microsoft.AspNetCore.Mvc;
using System;

namespace HBRPractNet.Controllers
{
    public class LanguageController : BaseController
    {
        // GET: Language
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Change(String LanguageAbbrevation)
        {
            if (LanguageAbbrevation != null)
            {
                BaseController.ChangeCulture(LanguageAbbrevation);
            }
            return View("Index");
        }
    }
}
