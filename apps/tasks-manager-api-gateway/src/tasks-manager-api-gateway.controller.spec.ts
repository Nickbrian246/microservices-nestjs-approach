import { Test, TestingModule } from '@nestjs/testing';
import { TasksManagerApiGatewayController } from './tasks-manager-api-gateway.controller';
import { TasksManagerApiGatewayService } from './tasks-manager-api-gateway.service';

describe('TasksManagerApiGatewayController', () => {
  let tasksManagerApiGatewayController: TasksManagerApiGatewayController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TasksManagerApiGatewayController],
      providers: [TasksManagerApiGatewayService],
    }).compile();

    tasksManagerApiGatewayController = app.get<TasksManagerApiGatewayController>(TasksManagerApiGatewayController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(tasksManagerApiGatewayController.getHello()).toBe('Hello World!');
    });
  });
});
