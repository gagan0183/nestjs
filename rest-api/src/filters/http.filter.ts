import { ExceptionFilter, ArgumentsHost, HttpException, Catch } from "@nestjs/common";

@Catch(HttpExceptionFilter)
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const context = host.switchToHttp();
        const response = context.getResponse(),
              request = context.getRequest();
        console.log('exception', exception);
        if (exception) {
            const status = exception.getStatus();
            return response.status(status).json({
                status,
                message: exception.message.message
            });    
        }
    }
}