import fetchDataFromUrl from './ fetchDataFromUrl';
import Browser from '../Browser';
import { describe, vi } from 'vitest';



vi.mock('../Browser', () => {
  return vi.fn().mockImplementation(() => {
    return {
      initialize: vi.fn(),
      page: {
        $eval: vi.fn(),
      },
      close: vi.fn(),
    };
  });
});

describe('fetchDataFromUrl', () => {
  it('should fetch and parse data correctly', async () => {
    const url = 'https://example.com';
    const inputId = 'inputId';

    const mockedPage = {
      $eval: jest.fn().mockImplementation((selector, callback) => {
        if (selector === `#${inputId}`) {
          const element = { getAttribute: jest.fn().mockReturnValue('{"key": "value"}') };
          return callback(element);
        }
      }),
    };

    const mockedBrowser = new Browser(url);
    mockedBrowser.initialize.mockResolvedValue();
    mockedBrowser.page = mockedPage;
    mockedBrowser.close.mockResolvedValue();

    const result = await fetchDataFromUrl(url, inputId);

    expect(mockedBrowser.initialize).toHaveBeenCalled();
    expect(mockedBrowser.page?.$eval).toHaveBeenCalledWith(`#${inputId}`, expect.any(Function));
    expect(mockedBrowser.close).toHaveBeenCalled();
    expect(result).toEqual({ key: 'value' });
  });

  it('should return null if data is empty', async () => {
    const url = 'https://example.com';
    const inputId = 'inputId';

    const mockedPage = {
      $eval: jest.fn().mockImplementation((selector, callback) => {
        if (selector === `#${inputId}`) {
          const element = { getAttribute: jest.fn().mockReturnValue(null) };
          return callback(element);
        }
      }),
    };

    const mockedBrowser = new Browser(url);
    mockedBrowser.initialize.mockResolvedValue();
    mockedBrowser.page = mockedPage;
    mockedBrowser.close.mockResolvedValue();

    const result = await fetchDataFromUrl(url, inputId);

    expect(mockedBrowser.initialize).toHaveBeenCalled();
    expect(mockedBrowser.page?.$eval).toHaveBeenCalledWith(`#${inputId}`, expect.any(Function));
    expect(mockedBrowser.close).toHaveBeenCalled();
    expect(result).toBeNull();
  });

  it('should handle errors and close the browser', async () => {
    const url = 'https://example.com';
    const inputId = 'inputId';

    const mockedBrowser = new Browser(url);
    mockedBrowser.initialize.mockResolvedValue();
    mockedBrowser.close.mockRejectedValue(new Error('Error'));

    const result = await fetchDataFromUrl(url, inputId);

    expect(mockedBrowser.initialize).toHaveBeenCalled();
    expect(mockedBrowser.page?.$eval).not.toHaveBeenCalled();
    expect(mockedBrowser.close).toHaveBeenCalled();
    expect(result).toBeUndefined();
  });
});