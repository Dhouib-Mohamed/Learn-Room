import {IsDefined, IsString} from "class-validator";

export class CreatePracticeDto {
    @IsDefined()
    @IsString()
    name: string;
    @IsDefined()
    @IsString()
    content: string;
    @IsDefined()
    deadline: string;
}
