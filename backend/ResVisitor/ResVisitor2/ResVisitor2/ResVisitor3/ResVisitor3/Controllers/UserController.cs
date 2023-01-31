using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ResVisitor3.Model;
using ResVisitor3.Service;


namespace ResVisitor.Controllers
    {
        [Route("api/[controller]")]
        [ApiController]
        public class UserController : ControllerBase
        {
            UserService userService;
            [HttpPost]
            public void Create(UserModel user)
            {

                userService = new UserService();
                userService.Create(user);

            }
            [HttpGet]
            public UserModel Read(int id)
            {
                userService = new UserService();
                return userService.Read(id);
            }

            [HttpPut]
            public void Update(int id)
            {
                userService = new UserService();
                userService.Update(id);
            }
            [HttpDelete]
            public void Delete(int id)
            {
                userService = new UserService();
                userService.Delete(id);

            }

        }
    }
   