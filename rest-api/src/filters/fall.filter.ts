import { ExceptionFilter, Catch } from "@nestjs/common";

@Catch()
export class FallExceptionFilter implements ExceptionFilter{
    catch(exception: any, host: import("@nestjs/common").ArgumentsHost) {
        const context = host.switchToHttp();
        const response = context.getResponse();
        response.status(500).json({
            status: 500,
            message: 'Server error',
        });
    }
}