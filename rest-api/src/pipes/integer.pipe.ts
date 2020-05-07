import { PipeTransform, ArgumentMetadata, BadRequestException } from "@nestjs/common";

export class IntegerPipe implements PipeTransform<string> {
    transform(value: any, metadata: ArgumentMetadata) {
        const val = parseInt(value);
        if (isNaN(val)) {
            throw new BadRequestException('unable to convert to integer');
        }
        return val;
    }
}