import { Controller, Get } from "@nestjs/common";

@Controller("/app")
class AppController {
  @Get("/hi")
  getRootRouter() {
    return "hi there";
  }

  @Get("/bye")
  getByeThere() {
    return "bye there";
  }
}

export default AppController;
