process.argv.push('--arg1', 'us-west-2');
process.argv.push('--arg2', 'TABLE_NAME');
const mockDesribeTable = jest.fn();
jest.mock('@aws-sdk/client-dynamodb/commands/DescribeTableCommand', () => ({
    DynamoDB: function DynamoDB() {
        this.DescribeTableCommand = mockDesribeTable
    }
}));
const {params, run} = require("../../dynamodb/ddb_describetable");

//test function
test("has to mock db#describeTable",  async (done) => {
    await run();
    expect(mockDesribeTable).toHaveBeenCalled;
    done();
});
