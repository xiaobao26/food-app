import { describe, afterEach, it, vi, expect } from "vitest";

import apiTest from "@/api/api-test"; // Adjust the path accordingly

describe("apiTest", () => {
    afterEach(() => {
        vi.restoreAllMocks();
    });

    it("should fetch data successfully", async () => {
        // Mock a successful API response
        const spy = vi.spyOn(global, "fetch").mockResolvedValue({
            ok: true,
            text: vi.fn().mockResolvedValue("Test!"),
        } as unknown as Response);

        // Call the apiTest function
        const result = await apiTest();

        // Assert that the result matches the Test!
        expect(result).toBe("Test!");
        expect(spy).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledTimes(1);
    });

    //   it("should handle failed API request", async () => {
    //     // Mock a failed API response with a 404 status
    //     vi.spyOn(global, "fetch").mockResolvedValue({
    //       ok: false,
    //       status: 404,
    //       text: vi.fn().mockResolvedValue(""),
    //     } as unknown as Response);

    //     // Call the apiTest function and expect it to throw an error
    //     await expect(apiTest()).rejects.toThrowError(
    //       "Failed to fetch data. Status: 404"
    //     );
    //   });

    //   it("should handle network errors", async () => {
    //     // Mock a network error
    //     vi.spyOn(global, "fetch").mockRejectedValue(new Error("Network error"));

    //     // Call the apiTest function and expect it to throw an error
    //     await expect(apiTest()).rejects.toThrowError("Network error");
    //   });
});