using System.IO;
using System.Threading.Tasks;
using DocumentManager.Infrastructure;
using Microsoft.AspNetCore.Mvc;

namespace DocumentManager.Controllers
{
    [Route("api/[controller]")]
    public class DocumentsController : Controller
    {
        [HttpPost("upload")]
        public async Task<IActionResult> Upload()
        {
            await Request.StreamFile();
            return Ok();
        }
    }
}
