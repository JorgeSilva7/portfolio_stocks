/**
 * Api Exception
 *
 * Exception class with Code status and Message error
 *
 */
class ApiException extends Error {
	status: number;
	message: string;
	constructor(status: number, message: string) {
		super(message);
		this.status = status;
		this.message = message;
	}
}

export default ApiException;
