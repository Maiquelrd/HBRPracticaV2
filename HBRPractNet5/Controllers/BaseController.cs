using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using System;
using System.Globalization;
using System.Threading;

namespace HBRPractNet.Controllers
{
    public class BaseController : Controller
    {
        public static string currentCulture { get; set; }
        public override void OnActionExecuting(
           ActionExecutingContext filterContext)
        {
            base.OnActionExecuting(filterContext);

            if (!String.IsNullOrEmpty(currentCulture))
            {
                ChangeCulture(currentCulture);
            }
        }

        public static void ChangeCulture(string culture)
        {
            currentCulture = culture;

            Thread.CurrentThread.CurrentCulture = CultureInfo.CreateSpecificCulture(currentCulture);
            Thread.CurrentThread.CurrentUICulture = new CultureInfo(currentCulture);
        }
    }
}
