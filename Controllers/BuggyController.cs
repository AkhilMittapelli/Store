
using Microsoft.AspNetCore.Mvc;
using API.Controllers;
using Microsoft.AspNetCore.Http.HttpResults;

public class BuggyController :BaseApiController
{

    [HttpGet("not-found")]

    public ActionResult GetNotFound()
    {
        return NotFound();
    }
     [HttpGet("bad-request")]

    public ActionResult GetBadResult()
    {
        return BadRequest(new ProblemDetails{Title="This is bad request"});
    }
     [HttpGet("unauthorised")]

    public ActionResult GetUnAuthorised()
    {
        return Unauthorized();
    }
     [HttpGet("validation-error")]

    public ActionResult GetValidationError()
    {
        ModelState.AddModelError("problem 1","This is first error");
        ModelState.AddModelError("problem 2","This is Second error");
        return ValidationProblem();
    }
    [HttpGet("server-error")]

    public ActionResult GetServerError()
    {
        throw new Exception("This is server error");
    }
}
    
